/** @format */

export declare type CameraType = React.ForwardRefExoticComponent<
  CameraProps & React.RefAttributes<unknown>
> & {
  takePhoto(): string
  switchCamera(): FacingMode
  getNumberOfCameras(): number
}
