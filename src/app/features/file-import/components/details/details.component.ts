import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileRecord } from '../../models/file-import-models';

@Component({
  selector: 'vw-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: FileRecord) {}

  ngOnInit(): void {}
}
