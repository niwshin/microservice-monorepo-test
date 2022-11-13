
type Error = { name: string, message: string };

// request body を投げ込めばバリデーションエラーを返してくれる関数
export const validateObject = (obj: { name?: string, count?: number }): Error[] => {
  const errors = [];
  // 名前
  if ('name' in obj) {
    if ((obj.name || '').length <= 2) {
      errors.push({
        name: 'name',
        message: 'name length must be more than 2'
      })
    }
  } else {
    errors.push({
      name: 'name',
      message: 'name is required'
    })
  }

  // count
  if ('count' in obj) {
    if ((obj.count || NaN) < 3) {
      errors.push({
        name: 'count',
        message: 'count should be grater than 3'
      })
    }
  }
  return errors;
}
