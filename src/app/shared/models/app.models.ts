export const enum AppRoutes {
  DEFAULT = '',
  ANY = '**',
  FILE_IMPORT = 'file-import'
}

export interface Adapter<T> {
  adapt(item: any): T;
}
