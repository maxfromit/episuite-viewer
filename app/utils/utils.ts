const getLabelOrNA = (value?: string | number): string => {
  if (typeof value === 'number') {
    return String(Number(value).toFixed(3))
  }
  return value && value.trim().length > 0 ? value : 'N/A'
}

export { getLabelOrNA }
