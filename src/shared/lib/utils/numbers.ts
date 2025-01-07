export class NumberUtils {
  static extractNumber(value: string): number {
    const match = value.match(/^-?\d+(\.\d+)?/)
    return match ? parseFloat(match[0]) : 0
  }

  static sizeToPx(size: string | number, parent: number = window.innerWidth): number {
    if (typeof size === 'number') return size
    const unit = size.match(/[a-z%]+$/)?.[0] || null
    if (unit === 'px') return NumberUtils.extractNumber(size)
    if (unit === '%') return (parent / NumberUtils.extractNumber(size)) * 100
    if (unit === 'vw') return (window.innerWidth / NumberUtils.extractNumber(size)) * 100
    if (unit === 'vh') return (window.innerHeight / NumberUtils.extractNumber(size)) * 100
    throw new Error(`[NumberUtils.sizeToPx] invalid size value: ${size}`)
  }
}
