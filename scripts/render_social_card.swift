import Foundation
import CoreGraphics
import CoreText
import ImageIO
import UniformTypeIdentifiers

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let outputURL = root.appendingPathComponent("social-card.png")
let photoURL = root.appendingPathComponent("images/jorge_tellez.jpg")

let width = 1200
let height = 630
let canvas = CGSize(width: width, height: height)

func rgba(_ r: CGFloat, _ g: CGFloat, _ b: CGFloat, _ a: CGFloat = 1) -> CGColor {
    CGColor(
        colorSpace: CGColorSpace(name: CGColorSpace.sRGB)!,
        components: [r / 255, g / 255, b / 255, a]
    )!
}

func rect(_ x: CGFloat, _ top: CGFloat, _ w: CGFloat, _ h: CGFloat) -> CGRect {
    CGRect(x: x, y: CGFloat(height) - top - h, width: w, height: h)
}

func drawLine(
    _ text: String,
    in box: CGRect,
    context: CGContext,
    fontName: String,
    fontSize: CGFloat,
    color: CGColor,
    alignment: CTTextAlignment = .left,
    kern: CGFloat = 0
) {
    let font = CTFontCreateWithName(fontName as CFString, fontSize, nil)
    let attributes: [NSAttributedString.Key: Any] = [
        NSAttributedString.Key(rawValue: kCTFontAttributeName as String): font,
        NSAttributedString.Key(rawValue: kCTForegroundColorAttributeName as String): color,
        NSAttributedString.Key(rawValue: kCTKernAttributeName as String): kern
    ]
    let attributed = NSAttributedString(string: text, attributes: attributes)
    let line = CTLineCreateWithAttributedString(attributed)

    var ascent: CGFloat = 0
    var descent: CGFloat = 0
    var leading: CGFloat = 0
    let lineWidth = CGFloat(CTLineGetTypographicBounds(line, &ascent, &descent, &leading))

    var x = box.minX
    switch alignment {
    case .center:
        x += (box.width - lineWidth) / 2
    case .right:
        x += box.width - lineWidth
    default:
        break
    }

    let baselineY = box.minY + ((box.height - (ascent + descent + leading)) / 2) + ascent

    context.saveGState()
    context.textMatrix = .identity
    context.textPosition = CGPoint(x: x, y: CGFloat(height) - baselineY)
    CTLineDraw(line, context)
    context.restoreGState()
}

func fillRoundedRect(_ rect: CGRect, radius: CGFloat, context: CGContext, color: CGColor) {
    let path = CGPath(roundedRect: rect, cornerWidth: radius, cornerHeight: radius, transform: nil)
    context.addPath(path)
    context.setFillColor(color)
    context.fillPath()
}

guard let context = CGContext(
    data: nil,
    width: width,
    height: height,
    bitsPerComponent: 8,
    bytesPerRow: 0,
    space: CGColorSpace(name: CGColorSpace.sRGB)!,
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
) else {
    fatalError("Could not create drawing context")
}

context.setAllowsAntialiasing(true)
context.setShouldAntialias(true)
context.interpolationQuality = .high

let fullRect = CGRect(origin: .zero, size: canvas)
context.saveGState()
context.addRect(fullRect)
context.clip()
let bgGradient = CGGradient(
    colorsSpace: CGColorSpace(name: CGColorSpace.sRGB)!,
    colors: [rgba(247, 248, 250), rgba(232, 237, 241)] as CFArray,
    locations: [0, 1]
)!
context.drawLinearGradient(
    bgGradient,
    start: CGPoint(x: canvas.width / 2, y: canvas.height),
    end: CGPoint(x: canvas.width / 2, y: 0),
    options: []
)
context.restoreGState()

context.setFillColor(rgba(255, 77, 61, 0.08))
context.fillEllipse(in: CGRect(x: -70, y: 390, width: 400, height: 400))
context.setFillColor(rgba(13, 23, 38, 0.04))
context.fillEllipse(in: CGRect(x: 946, y: 426, width: 280, height: 280))

let panelRect = rect(70, 54, 1060, 522)
let panelPath = CGPath(roundedRect: panelRect, cornerWidth: 36, cornerHeight: 36, transform: nil)
context.saveGState()
context.setShadow(offset: CGSize(width: 0, height: -24), blur: 28, color: rgba(13, 23, 38, 0.12))
context.addPath(panelPath)
context.clip()
let panelGradient = CGGradient(
    colorsSpace: CGColorSpace(name: CGColorSpace.sRGB)!,
    colors: [rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.88)] as CFArray,
    locations: [0, 1]
)!
context.drawLinearGradient(
    panelGradient,
    start: CGPoint(x: panelRect.minX, y: panelRect.maxY),
    end: CGPoint(x: panelRect.maxX, y: panelRect.minY),
    options: []
)
context.restoreGState()

context.addPath(panelPath)
context.setStrokeColor(rgba(216, 222, 229))
context.setLineWidth(2)
context.strokePath()

let logoRect = rect(120, 96, 74, 74)
let logoPath = CGPath(roundedRect: logoRect, cornerWidth: 37, cornerHeight: 37, transform: nil)
context.addPath(logoPath)
context.setFillColor(rgba(255, 77, 61))
context.fillPath()
context.addPath(logoPath)
context.setStrokeColor(rgba(18, 18, 18))
context.setLineWidth(5)
context.strokePath()

drawLine(
    "G",
    in: CGRect(x: 120, y: 105, width: 74, height: 54),
    context: context,
    fontName: "HelveticaNeue-Bold",
    fontSize: 42,
    color: rgba(18, 18, 18),
    alignment: .center
)

drawLine(
    "Growth Expert",
    in: CGRect(x: 220, y: 100, width: 460, height: 56),
    context: context,
    fontName: "HelveticaNeue-Bold",
    fontSize: 42,
    color: rgba(13, 23, 38)
)

drawLine(
    "Revenue Unlock",
    in: CGRect(x: 120, y: 206, width: 620, height: 88),
    context: context,
    fontName: "HelveticaNeue-Bold",
    fontSize: 82,
    color: rgba(13, 23, 38),
    kern: -2.4
)
drawLine(
    "Program",
    in: CGRect(x: 120, y: 282, width: 620, height: 88),
    context: context,
    fontName: "HelveticaNeue-Bold",
    fontSize: 82,
    color: rgba(13, 23, 38),
    kern: -2.4
)

let buttonRect = rect(120, 430, 390, 82)
let buttonPath = CGPath(roundedRect: buttonRect, cornerWidth: 41, cornerHeight: 41, transform: nil)
context.saveGState()
context.addPath(buttonPath)
context.clip()
let buttonGradient = CGGradient(
    colorsSpace: CGColorSpace(name: CGColorSpace.sRGB)!,
    colors: [rgba(255, 77, 61), rgba(217, 47, 33)] as CFArray,
    locations: [0, 1]
)!
context.drawLinearGradient(
    buttonGradient,
    start: CGPoint(x: buttonRect.minX, y: buttonRect.midY),
    end: CGPoint(x: buttonRect.maxX, y: buttonRect.midY),
    options: []
)
context.restoreGState()

drawLine(
    "Start Now",
    in: CGRect(x: 120, y: 447, width: 390, height: 40),
    context: context,
    fontName: "HelveticaNeue-Bold",
    fontSize: 38,
    color: rgba(255, 255, 255),
    alignment: .center
)

let photoFrame = rect(786, 90, 284, 450)
let photoPath = CGPath(roundedRect: photoFrame, cornerWidth: 28, cornerHeight: 28, transform: nil)
if
    let imageSource = CGImageSourceCreateWithURL(photoURL as CFURL, nil),
    let photo = CGImageSourceCreateImageAtIndex(imageSource, 0, nil)
{
    let scale = max(photoFrame.width / CGFloat(photo.width), photoFrame.height / CGFloat(photo.height))
    let drawSize = CGSize(width: CGFloat(photo.width) * scale, height: CGFloat(photo.height) * scale)
    let drawRect = CGRect(
        x: photoFrame.midX - drawSize.width / 2,
        y: photoFrame.midY - drawSize.height / 2,
        width: drawSize.width,
        height: drawSize.height
    )

    context.saveGState()
    context.addPath(photoPath)
    context.clip()
    context.draw(photo, in: drawRect)
    context.restoreGState()
}

context.addPath(photoPath)
context.setStrokeColor(rgba(255, 255, 255, 0.8))
context.setLineWidth(1.5)
context.strokePath()

guard let cgImage = context.makeImage() else {
    fatalError("Could not make CGImage")
}

guard let destination = CGImageDestinationCreateWithURL(outputURL as CFURL, UTType.png.identifier as CFString, 1, nil) else {
    fatalError("Could not create image destination")
}

CGImageDestinationAddImage(destination, cgImage, nil)
guard CGImageDestinationFinalize(destination) else {
    fatalError("Could not finalize PNG")
}

print("Wrote \(outputURL.path)")
