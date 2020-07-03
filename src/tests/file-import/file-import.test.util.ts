import { AppState } from '@core/store/reducers';
import { AOA, FileRecord } from '@file/models/file-import-models';
import { FileAdapterService, FileRecordAdapter } from '@file/services/file-adapter.service';

// RECORDS FROM CSV FILE
export const CSV_RECORDS: AOA = [
  ['Osbert', 'Goodisson', 33, 43409],
  ['Barr', 'Meader', 81, 43429],
  ['Kerrin', 'Gilhouley', 71, 43677.958333333336],
  ['Joli', 'Masters', 79, 43656.958333333336],
  ['Rem', 'Baggott', 44, 43732.958333333336],
  ['Gary', 'Hopfer', 34, 43758.958333333336],
  ['Anya', 'Jumont', 45, 43760.958333333336],
  ['Cristiano', 'Wallach', 34, 43634.958333333336],
  ['Dayle', 'Maroney', 2, 43729.958333333336],
  ['Bernard', 'Feedome', 90, 43507],
  ['Rooney', 'Proctor', 35, 43545.958333333336]
];
Object.freeze(CSV_RECORDS);

const ADAPTER = new FileAdapterService(new FileRecordAdapter());

// ACTUAL FILE RECORDS USED IN THE TABLE
export const FILE_RECORDS: FileRecord[] = ADAPTER.getFileRecords(CSV_RECORDS);
Object.freeze(FILE_RECORDS);

export const INITIAL_FILE_STORE: AppState = {
  file: {
    records: []
  }
};

export const LOADING_FILE_STORE: AppState = {
  file: {
    records: [],
    loading: true
  }
};

export const SUCCESS_FILE_STORE: AppState = {
  file: {
    records: FILE_RECORDS
  }
};

export const ERROR_FILE_STORE: AppState = {
  file: {
    error: 'kboom'
  }
};

export const EVENT = {
  target: {
    files: [
      {
        name: 'mock.csv'
      }
    ]
  }
};
