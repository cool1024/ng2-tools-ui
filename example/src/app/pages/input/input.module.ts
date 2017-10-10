import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TSPirsmModule, TSInputModule, TSTabModule, TSIconModule } from './../../tools-ui';

import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';
import { ImageComponent } from './image/image.component';
import { FileComponent } from './file/file.component';
import { NumberComponent } from './number/number.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TSPirsmModule,
    TSInputModule,
    TSIconModule,
    TSTabModule,
    RouterModule.forChild([
      { path: 'text', component: TextComponent },
      { path: 'video', component: VideoComponent },
      { path: 'image', component: ImageComponent },
      { path: 'file', component: FileComponent },
      { path: 'number', component: NumberComponent },
    ])
  ],
  declarations: [
    TextComponent,
    VideoComponent,
    ImageComponent,
    FileComponent,
    NumberComponent,
  ]
})
export class InputModule { }