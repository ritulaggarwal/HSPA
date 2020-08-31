import { Injectable } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Property } from '../../model/property';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property> {

  constructor(private housingService: HousingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property> | Property{
    const propId=route.params['id'];
    return this.housingService.getProperty(propId);
  }

}
