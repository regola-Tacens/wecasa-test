// library imports
import React, {useRef, useEffect} from 'react'
import {Toast} from 'primereact/toast'

type ErrorToastProps = {
  error: any,
  message?: string
}

const ErrorToast = ({error, message}: ErrorToastProps) => {
  const toast = useRef<any | null>(null)

  useEffect(() => {
    if(toast?.current && error) {
      toast.current.show({
        severity: 'error',
        summary: 'erreur',
        life: 5000
      });
    }
  }, [error])

  return <Toast ref={toast} />

}
ErrorToast.defaultProps = {
  message: 'SERVER_ERRORS'
}

export default ErrorToast