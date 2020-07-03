export interface Loadable {
  loading: boolean;
  success: boolean;
  error: any;
}

export const loadInit = () => ({
  loading: false,
  success: false,
  error: null
});

export const onLoad = () => ({
  loading: true,
  success: false,
  error: null
});

export const onLoadSuccess = () => ({
  loading: false,
  success: true,
  error: null
});

export const onLoadFail = error => ({
  loading: false,
  success: false,
  error
});
