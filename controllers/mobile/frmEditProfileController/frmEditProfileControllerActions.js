define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onCapture defined for camProfilePhoto **/
    AS_Camera_ee6e91b25a31413183d558ec6bf04131: function AS_Camera_ee6e91b25a31413183d558ec6bf04131(eventobject) {
        var self = this;
        return self.capturePhoto.call(this, eventobject);
    },
    /** onClick defined for flxEditName **/
    AS_FlexContainer_c8d548c269844aec84671f983249fe0a: function AS_FlexContainer_c8d548c269844aec84671f983249fe0a(eventobject) {
        var self = this;
        self.view.flxEditingName.isVisible = true;
    },
    /** onClick defined for btnNameChange **/
    AS_Button_j55ec94dd043476fbcc6276292a77c05: function AS_Button_j55ec94dd043476fbcc6276292a77c05(eventobject) {
        var self = this;
        return self.changeName.call(this);
    },
    /** onClick defined for flxProfilePhoto **/
    AS_FlexContainer_abe04827e53740098f6bd6281d28e9df: function AS_FlexContainer_abe04827e53740098f6bd6281d28e9df(eventobject) {
        var self = this;
    },
    /** onClick defined for flxUserInfo **/
    AS_FlexContainer_e1ffc9a217904078a221d8366fb005cd: function AS_FlexContainer_e1ffc9a217904078a221d8366fb005cd(eventobject) {
        var self = this;
        self.view.flxEditingName.isVisible = true;
    },
    /** onCapture defined for camWallpaper **/
    AS_Camera_b6939d2b32cb4d469d73c34079e946f2: function AS_Camera_b6939d2b32cb4d469d73c34079e946f2(eventobject) {
        var self = this;
        return self.captureWallpaper.call(this, eventobject);
    }
});