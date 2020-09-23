import { Component, OnInit, Inject } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthorisationService } from 'src/app/settings/authorisation/authorisation.service';
import { SettingRoleModel } from 'src/app/settings/authorisation/settings-model/setting-role-model.model';

//import { TableGridComponent } from 'src/app/settings/table-grid/table-grid.component';
//import { Router, ActivatedRoute } from '@angular/router';
//import { UiService } from '../../ui.service';
//import { DialogService } from '../dialog.service';

interface PluginName {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin-role-dialog',
  templateUrl: './admin-role-dialog.component.html',
  styleUrls: ['./admin-role-dialog.component.scss']
})
export class AdminRoleDialogComponent implements OnInit {

  public edited = false;
  roleForm: FormGroup;
  submitted = false;
  titlesRole: string = '';
  permissionsData: any = [];
  checkedIDs = [];
  selectedPluginName: string = '';
  pluginnames: any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminRoleDialogComponent>,
    private settingsService: AuthorisationService,
    private formBuilder: FormBuilder,
    //public router: Router,
    //public route: ActivatedRoute,
    //private uiService: UiService,
    // private dialogService: DialogService
  ) {
    dialogRef.disableClose = true;
   }

  ngOnInit(): void {

    // console.log("modelData:: " + JSON.stringify(this.data.modeldata));
    this.roleForm = this.formBuilder.group({
      RoleName: ['', Validators.required],
      PluginName: ['', Validators.required],
      Permissions: [''],
    });

    this.getPluginNameAndPermissions();
    /* this.permissionsData = [
      { name: 'createproject', state: false },
      { name: 'editproject', state: false },
      { name: 'closereopenproject', state: false },
      { name: 'selectprojectmodule', state: false },
      { name: 'managemembers', state: false },
      { name: 'manageversions', state: false },
      { name: 'createsubprojects', state: false },
      { name: 'sshkeys', state: false }
    ]; */

    if (!!this.data.modeldata) {
      // console.log("this.pluginnamesEdit:: " + this.pluginnames);
      /* var spliteData = this.data.modeldata.Permissions;
      var splits = spliteData.split(",");
      for (var i = 0; i < splits.length; i++) {
        this.changeExistingstateValue(splits[i]);
      } */
      // console.log("this.permissionsData:: " + JSON.stringify(this.permissionsData));

      // this.fetchCheckedIDs();
      //console.log("fetchCheckedIDs:: " + this.checkedIDs);

      this.titlesRole = "Edit";
      this.selectedPluginName = this.data.modeldata.PluginName;

      this.roleForm.controls['RoleName'].setValue(
        this.data.modeldata.RoleName
      );
      this.roleForm.controls['PluginName'].setValue(
        this.selectedPluginName
      );
      this.roleForm.controls['Permissions'].setValue(
        this.data.modeldata.Permissions
      );
    } else {
      //this.getPluginNameAndPermissions();
      this.titlesRole = "Add";
      this.permissionsData;
    }

  }


  changeExistingstateValue(passedName) {
    for (var i = 0; i < this.permissionsData.length; i++) {
      var insideArrayJson = this.permissionsData[i];
      if (insideArrayJson.hasOwnProperty("name")) {
        if (passedName == insideArrayJson.name) {
          console.log("passedName:: " + insideArrayJson.name);

          var userJson = {};
          userJson["name"] = insideArrayJson.name;
          userJson["state"] = true;
          this.permissionsData.push(userJson);
          this.permissionsData.splice(i, 1);
          break;
        } else {
          this.permissionsData.push(insideArrayJson);
        }
        //break;
      }

    }
    //console.log("changedName:: "+this.permissionsData);

    this.permissionsData = this.permissionsData.filter((thing, index) => {
      const _thing = JSON.stringify(thing);
      return index === this.permissionsData.findIndex(obj => {
        return JSON.stringify(obj) === _thing;
      });
    });

  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.permissionsData.forEach((value, index) => {
      if (value.state) {
        console.log("inside");
        this.checkedIDs.push(value.Name);
      }
    });
  }

  get f() {
    return this.roleForm.controls;
  }

  /*  pluginnames: PluginName[] = [
     { value: 'Fetchmypayments', viewValue: 'Fetchmypayments' },
     { value: 'CarrotRule', viewValue: 'CarrotRule' },
     { value: 'Doctiger', viewValue: 'Doctiger' }
   ]; */

  getPluginNameAndPermissions() {
    this.settingsService
      .getPluginNameAndPermissions()
      .subscribe((res) => {
        //console.log("getPluginNameAndPermissionsList:: " + JSON.stringify(res));
        if (res.pluginMasters) {
          this.pluginnames = res.pluginMasters;

          if (this.titlesRole == "Edit") {
           // console.log("this.pluginnamesEdit:: " + JSON.stringify(this.pluginnames));

            let data = search_array(this.pluginnames, this.selectedPluginName);
            //console.log("dataEdit:: " + JSON.stringify(data));
            //this.permissionsData=data.permissionMasters;

            if (data.hasOwnProperty("permissionMasters")) {
              var spliteData = this.data.modeldata.Permissions;
            //  console.log("spliteData:: " + spliteData);
              var splits = spliteData.split(",");
              for (var i = 0; i < splits.length; i++) {
                this.changeExistingstateValueDynamic(splits[i], data.permissionMasters);
              }
              this.fetchCheckedIDs();
              this.edited = true;
            }
          }

        }
      });
  }

  changeExistingstateValueDynamic(passedName, arrayPermissoinsData) {
    for (var i = 0; i < arrayPermissoinsData.length; i++) {
      var insideArrayJson = arrayPermissoinsData[i];
      if (insideArrayJson.hasOwnProperty("Name")) {
        if (passedName == insideArrayJson.Name) {
         // console.log("passedName:: " + insideArrayJson.Name);

          /* var userJson = {};
          userJson["Name"] = insideArrayJson.Name;
          userJson["state"] = true;
          this.permissionsData.push(userJson); */

          insideArrayJson['state']='true';
         // this.permissionsData.push(insideArrayJson);
          // this.permissionsData.splice(i, 1);
         // break;
        } else {
         // this.permissionsData.push(insideArrayJson);

        }
        //break;
      }
      this.permissionsData=arrayPermissoinsData
     // console.log("insideArrayJsonarrayPermissoinsData:: "+JSON.stringify(arrayPermissoinsData));

    }

    //console.log("dub:: "+JSON.stringify(checkDuplicateInObject('Name', this.permissionsData)));
   // this.permissionsData= checkDuplicateInObject('Name', this.permissionsData);
   
   //console.log("changedName:: " + JSON.stringify(this.permissionsData));

    /* this.permissionsData = this.permissionsData.filter((thing, index) => {
      const _thing = JSON.stringify(thing);
      return index === this.permissionsData.findIndex(obj => {
        return JSON.stringify(obj) === _thing;
      });
    }); */

  }

  myFunction(item, index) {
    document.getElementById("demo").innerHTML += index + ":" + item.Name + "<br>";
  }

  changePluginName(e: any) {
    if (this.selectedPluginName != '') {
     console.log("selectValue:: " + this.selectedPluginName);

    /* // console.log("attribute:: " + e);
     console.log(e.source.value, e.source.selected);
     let target = e.source.selected._element.nativeElement;
     //console.log("target:: " + target);
     let selectedData = {
      attribute: target.getAttribute('data-Name'),
      value: e.value,
      text: target.innerText.trim()
    };
    console.log("selectedData:: "+JSON.stringify(selectedData)); */

      if (this.pluginnames.length > 0) {
         if(this.titlesRole=='Edit'){
         // console.log("this.pluginnamesEditSelect:: " + this.pluginnames);
          let data = search_array(this.pluginnames, this.selectedPluginName);
          //console.log("data:: " + JSON.stringify(data));
         // this.permissionsData = data.permissionMasters;

          if (data.hasOwnProperty("permissionMasters")) {
            var spliteData = this.data.modeldata.Permissions;
          //  console.log("spliteData:: " + spliteData);
            var splits = spliteData.split(",");
            for (var i = 0; i < splits.length; i++) {
              this.changeExistingstateValueDynamic(splits[i], data.permissionMasters);
            }
            this.fetchCheckedIDs();
            this.edited = true;
          }

        }else{
          //console.log("this.pluginnamesAdd:: " + this.pluginnames);
          let data = search_array(this.pluginnames, this.selectedPluginName);
         // console.log("data:: " + JSON.stringify(data));
          this.permissionsData = data.permissionMasters;
          this.edited = true;
         }
       
      }

    }
  }

  onCheckboxChange(e, permissionData) {
    if (e.checked) {

     /* //console.log("e:: "+e);
    // console.log(e.source._elementRef.nativeElement);
     let target=e.source._elementRef.nativeElement;
     console.log("text:: "+target.innerText.trim());
     console.log("checked:: "+e.checked); */ //find id,name,attribute search later
     
      /* let FirstComponentObject = new TableGridComponent(this.router,this.route,this.uiService,this.settingsService,this.dialogService);
      FirstComponentObject.getRoleList(); */

      // console.log("checked:: ");
      this.checkedIDs.push(permissionData);
      // console.log("fetchCheckedIDsNew:: " + this.checkedIDs);
      // console.log("permissionData:: " + permissionData);
    } else {
      console.log("unchecked:: ");
      var index = this.checkedIDs.indexOf(permissionData);
      this.checkedIDs.splice(index, 1);
      // console.log("fetchCheckedIDsNewUnchecked:: " + this.checkedIDs);
    }
  }

  closeProjectDialog() {
    this.dialogRef.close();
  }

  saveRoleData() {

   // this.dialogRef.close('sending data to Role component');
    this.submitted = true;

    // stop here if form is invalid
    if (this.roleForm.invalid) {
      return;
    }

    const customer = JSON.parse(localStorage.getItem('currentUser'));
    var dataString = this.checkedIDs;
    //console.log("dataString:: "+dataString);
    let newRoleAddObj = new SettingRoleModel();

    newRoleAddObj.RoleName = this.roleForm.value.RoleName;
    newRoleAddObj.PluginName = this.selectedPluginName;
    newRoleAddObj.Permissions = dataString.toString();
    newRoleAddObj.CustomerId = customer.CustomerId;

    if (!!this.data.modeldata) {
      newRoleAddObj.Id = this.data.modeldata.Id
    }

    this.dialogRef.close(newRoleAddObj);

  }

}

function search_array(array, valuetofind) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]['Name'] === valuetofind) {
      return array[i];
    }
  }
  return -1;
}


function checkDuplicateInObject(propertyName, inputArray) {
  var seenDuplicate = false,
      testObject = {};

      let arraydata=[];

  inputArray.map(function(item) {
    var itemPropertyName = item[propertyName];
    if (itemPropertyName in testObject) {
      testObject[itemPropertyName].duplicate = true;
      item.duplicate = true;
      seenDuplicate = true;
     // console.log("itemPropertyNameif:: "+JSON.stringify(item))
    }
    else {
      testObject[itemPropertyName] = item;
      delete item.duplicate;
     // console.log("itemPropertyNameelse:: "+JSON.stringify(item))
      arraydata.push(item);
    }
  });

  return arraydata;
}
