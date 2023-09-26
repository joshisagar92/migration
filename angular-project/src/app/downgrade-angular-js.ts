
import {downgradeInjectable} from '@angular/upgrade/static'
import { ModalService } from './service/modal-service.service';
import {IAngularStatic} from 'angular'
import { setAngularJSGlobal } from '@angular/upgrade/static';

declare let angular: IAngularStatic

export function installDowngradedAngularJsComponenet(){
    setAngularJSGlobal(angular)
    angular.module("studentAppAngular", [])
    .factory('modalService',downgradeInjectable(ModalService))
}