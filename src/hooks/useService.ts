import React from 'react'

const useService = () => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const request = React.useCallback(async (url, options) => {
    let response
    let json
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      if (response.status > 307) throw new Error(json.message)
    } catch (e) {
      json = null
      setError(e.message)
    } finally {
      setData(json)
      setLoading(false)
      return { response, json }
    }
  }, [])

  return {
    data,
    loading,
    error,
    setError,
    request
  }
}

export default useService
