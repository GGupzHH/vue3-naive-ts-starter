const { message } = createDiscreteApi(
  ['message']
)

export function filterResponse(
  res: IRequestData,
  successCb?: IStoreFilterCallBack | undefined | null,
  errorCb?: IStoreFilterCallBack | undefined | null
) :Promise<IRequestData>{
  return new Promise((resolve) => {
    if (res && res.code === 200) {
      successCb && successCb(res)
    } else {
      errorCb
        ? errorCb(res)
        : message.error(res.message)
    }
    resolve(res)
  })
}

export type filterResponseTypes = typeof filterResponse
