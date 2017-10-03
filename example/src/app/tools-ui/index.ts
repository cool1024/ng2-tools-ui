/*tool modules*/
export { PirsmCodeModule as TSPirsmModule } from './modules/pirsm-code.module';
export { LoadingModule as TSLoadingModule } from './modules/loading-directive.module';
export { InputModule as TSInputModule } from './modules/input-component.module';
export { IconModule as TSIconModule } from './modules/icon-component.module';
export { TabPadModule as TSTabModule } from './modules/tab-pad.module';
export { OSSModule as TSOssModule } from './modules/oss.module';


/*const configs*/
export { CODE_LANGUAGE } from './components/pirsm-code/pirsm-code.component';

/*tool interfaces*/
export { UploadResult, UploadingProgress } from './interfaces/upload-result.interface';
export { VideoConfig } from './interfaces/video-config.interface';
export { OSSUploadDatas } from './interfaces/oss-params.interface';

/*tool classes*/
export { TSUploadResult, TSUploadingProgress } from './classes/upload.class';

/*tool services*/
export { OssService as TSOssService } from './services/oss.service';
