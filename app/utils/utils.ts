const formatValue = (
  value?: number,
  {
    units,
    decimalPlaces = 2
  }: {
    units?: string | 'celsius' | 'kelvins'
    decimalPlaces?: number
  } = {}
) => {
  if (value === undefined || value === null) return ''

  return (
    (Math.abs(value) > 100 && decimalPlaces < 3
      ? value.toExponential(decimalPlaces)
      : value.toFixed(decimalPlaces)) +
    (units === 'celsius' ? ' °C' : units === 'kelvins' ? ' °K' : '')
  )
}

export { formatValue }
