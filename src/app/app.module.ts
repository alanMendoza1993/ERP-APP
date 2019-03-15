import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Routes
import { APP_ROUTING } from './app.route';
import { BsDatepickerModule } from 'ngx-bootstrap';
/* import { DataTablesModule } from 'angular-datatables';
 */

//Services
import { UserService } from './services/user.service';
import { PlaningService } from './services/planning.service';



//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PNotFoundComponent } from './components/p-not-found/p-not-found.component'
import { ProductionHomeComponent } from './components/production-home/production-home.component';
import { PlanningListComponent } from './components/planning-list/planning-list.component';

//Imports
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductionOrderComponent } from './components/sales/production-order/production-order.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OrdenCompraComponent } from './components/pages/orden-compra/orden-compra.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { ListadoComponent } from './components/pages/listado/listado.component';
import { ProveedoresComponent } from './components/pages/proveedores/proveedores.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditarProveedorComponent } from './helpers/editar-proveedor/editar-proveedor.component';
import { CrearOrdenComponent } from './components/pages/crear-orden/crear-orden.component';
import { ConsultarOrdenComponent } from './components/pages/consultar-orden/consultar-orden.component';
import { NuevaOpComponent } from './components/pages/nueva-op/nueva-op.component';
import { ListadoVentasComponent } from './components/pages/listado-ventas/listado-ventas.component';
import { RecepcionComponent } from './components/pages/recepcion/recepcion.component';
import { CalculoComponent } from './components/pages/calculo/calculo.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { RolesComponent } from './components/pages/roles/roles.component';
import { AccionesComponent } from './components/pages/acciones/acciones.component';
import { App2Component } from './components/pages/app2/app2.component';
import { RecepcionMercanciaComponent } from './components/pages/recepcion-mercancia/recepcion-mercancia.component';
import { ColaProduccionComponent } from './components/pages/cola-produccion/cola-produccion.component';
import { WarehouseComponent } from './components/pages/warehouse/warehouse.component';
import { WarehouseProductsComponent } from './components/pages/warehouse-products/warehouse-products.component';
import { DistributionComponent } from './components/pages/distribution/distribution.component';
import { CatalogsComponent } from './components/pages/catalogs/catalogs.component';
import { CatalogsListComponent } from './components/pages/catalogs-list/catalogs-list.component';
import { OrderBuyComponent } from './components/pages/order-buy/order-buy.component';
import { NominasComponent } from './components/pages/nominas/nominas.component';
import { SuppliersProfileComponent } from './components/pages/suppliers-profile/suppliers-profile.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { BuyRequerimentComponent } from './components/pages/buy-requeriment/buy-requeriment.component';
import { NewShoppingComponent } from './components/pages/new-shopping/new-shopping.component';
import { ListShoppingComponent } from './components/pages/list-shopping/list-shopping.component';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { MaterialComponent } from './components/pages/material/material.component';
import { MaterialArticlesComponent } from './components/pages/material-articles/material-articles.component';
import { ProviderProductsComponent } from './components/pages/provider-products/provider-products.component';
import { PagesComponent } from './components/pages/pages.component';
import { PurchaseOrderComponent } from './components/pages/purchase-order/purchase-order.component';
import { ShoppingComponent } from './components/pages/shopping/shopping.component';
import { InternalProductsComponent } from './components/pages/internal-products/internal-products.component';
import { InternalProductsMaterialsComponent } from './components/pages/internal-products-materials/internal-products-materials.component';
import { ProductsEditComponent } from './components/pages/products-edit/products-edit.component';
const config: SocketIoConfig = { url: /* '192.168.1.110:2002' */'http://localhost:2002', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TopBarComponent,
    PNotFoundComponent,
    ProductionHomeComponent,
    PlanningListComponent,
    ProductionOrderComponent,
    SignInComponent,
    OrdenCompraComponent,
    InicioComponent,
    ListadoComponent,
    ProveedoresComponent,
    EditarProveedorComponent,
    CrearOrdenComponent,
    ConsultarOrdenComponent,
    NuevaOpComponent,
    ListadoVentasComponent,
    RecepcionComponent,
    CalculoComponent,
    UsuariosComponent,
    RolesComponent,
    AccionesComponent,
    App2Component,
    RecepcionMercanciaComponent,
    ColaProduccionComponent,
    WarehouseComponent,
    WarehouseProductsComponent,
    DistributionComponent,
    CatalogsComponent,
    CatalogsListComponent,
    OrderBuyComponent,
    NominasComponent,
    SuppliersProfileComponent,
    ProfileComponent,
    BuyRequerimentComponent,
    NewShoppingComponent,
    ListShoppingComponent,
    MaterialComponent,
    MaterialArticlesComponent,
    ProviderProductsComponent,
    PagesComponent,
    PurchaseOrderComponent,
    ShoppingComponent,
    InternalProductsComponent,
    InternalProductsMaterialsComponent,
    ProductsEditComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    UserService,
    PlaningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
