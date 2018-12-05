define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickSign defined for head **/
    AS_UWI_f699152834314aea94a1a35f014b3c19: function AS_UWI_f699152834314aea94a1a35f014b3c19(eventobject) {
        var self = this;
        return self.validate.call(this);
    },
    /** onBeginEditing defined for txtUserName **/
    AS_TextField_ef9a5d08553249f289c5573ce9f91f07: function AS_TextField_ef9a5d08553249f289c5573ce9f91f07(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.lineName.skin = "blueSkin";
            }, null);
        } else {
            (function() {
                self.view.lineName.skin = "blueSkin";
            })();
        }
    },
    /** onEndEditing defined for txtUserName **/
    AS_TextField_j20e6deb8fed4378bf03ad1bf3f4c1f0: function AS_TextField_j20e6deb8fed4378bf03ad1bf3f4c1f0(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.lineName.skin = "sknHorizontalLine";
            }, null);
        } else {
            (function() {
                self.view.lineName.skin = "sknHorizontalLine";
            })();
        }
    },
    /** onBeginEditing defined for txtUserName **/
    AS_TextField_a040d77ea724485084e695587517e00a: function AS_TextField_a040d77ea724485084e695587517e00a(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.lineName.skin = "blueSkin";
            }, null);
        } else {
            (function() {
                self.view.lineName.skin = "blueSkin";
            })();
        }
    },
    /** onEndEditing defined for txtUserName **/
    AS_TextField_c440eab6816e4c8cb6281addeaf7dd9b: function AS_TextField_c440eab6816e4c8cb6281addeaf7dd9b(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.lineName.skin = "sknHorizontalLine";
            }, null);
        } else {
            (function() {
                self.view.lineName.skin = "sknHorizontalLine";
            })();
        }
    },
    /** onBeginEditing defined for txtPass **/
    AS_TextField_d30fd868e82549ca8c104cf52a71e70b: function AS_TextField_d30fd868e82549ca8c104cf52a71e70b(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.linePass.skin = "blueSkin";
            }, null);
        } else {
            (function() {
                self.view.linePass.skin = "blueSkin";
            })();
        }
    },
    /** onEndEditing defined for txtPass **/
    AS_TextField_e7c354887d804357a64089e483dcccf7: function AS_TextField_e7c354887d804357a64089e483dcccf7(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.linePass.skin = "sknHorizontalLine";
            }, null);
        } else {
            (function() {
                self.view.linePass.skin = "sknHorizontalLine";
            })();
        }
    },
    /** onBeginEditing defined for txtPass **/
    AS_TextField_f35c94d06ca34275aef94cc16fffc5b8: function AS_TextField_f35c94d06ca34275aef94cc16fffc5b8(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.linePass.skin = "blueSkin";
            }, null);
        } else {
            (function() {
                self.view.linePass.skin = "blueSkin";
            })();
        }
    },
    /** onEndEditing defined for txtPass **/
    AS_TextField_a0623898a7094b80849d20b24163ef30: function AS_TextField_a0623898a7094b80849d20b24163ef30(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.linePass.skin = "sknHorizontalLine";
            }, null);
        } else {
            (function() {
                self.view.linePass.skin = "sknHorizontalLine";
            })();
        }
    }
});