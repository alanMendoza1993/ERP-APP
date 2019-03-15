import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//COMPONENTS


//COMPONENTS
import { NavComponent } from './components/nav/nav.component';
import { PNotFoundComponent } from './components/p-not-found/p-not-found.component';
import { PlanningListComponent } from './components/planning-list/planning-list.component';
import { ProductionOrderComponent} from './components/sales/production-order/production-order.component'
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { OrdenCompraComponent } from './components/pages/orden-compra/orden-compra.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { ListadoComponent } from './components/pages/listado/listado.component';
import { ProveedoresComponent } from './components/pages/proveedores/proveedores.component';
import { CrearOrdenComponent } from './components/pages/crear-orden/crear-orden.component';
import { ConsultarOrdenComponent } from './components/pages/consultar-orden/consultar-orden.component';
import { NuevaOpComponent } from './components/pages/nueva-op/nueva-op.component';
import { ListadoVentasComponent } from './components/pages/listado-ventas/listado-ventas.component';
import { RecepcionComponent } from './components/pages/recepcion/recepcion.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { RolesComponent } from './components/pages/roles/roles.component';
import { AccionesComponent } from './components/pages/acciones/acciones.component';
import { AppComponent } from './app.component';
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
//materiasles
import { MaterialComponent } from './components/pages/material/material.component';
import { MaterialArticlesComponent } from './components/pages/material-articles/material-articles.component';

//productos
import { ProviderProductsComponent } from './components/pages/provider-products/provider-products.component';

//shopping
import { PurchaseOrderComponent } from './components/pages/purchase-order/purchase-order.component';
import { ShoppingComponent } from './components/pages/shopping/shopping.component';

//products
import { InternalProductsComponent } from './components/pages/internal-products/internal-products.component';
import { InternalProductsMaterialsComponent } from './components/pages/internal-products-materials/internal-products-materials.component';
//productos registrados
import { ProductsEditComponent } from './components/pages/products-edit/products-edit.component';

const APP_ROUTES: Routes = [
  {path:'', component:SignInComponent},
  { path: '', component: App2Component, children: [
    { path: 'home', component: HomeComponent },
    { path: 'Inicio', component: InicioComponent },
    { path: 'crearOrden', component: CrearOrdenComponent},
    { path: 'sales/newPO', component: ProductionOrderComponent },
    { path: 'consultarOrden', component: ConsultarOrdenComponent},
    { path: 'buy/buyRequeriment', component: BuyRequerimentComponent},
    { path: 'production', component: ColaProduccionComponent},
    { path: 'production/colaProduccion', component: ColaProduccionComponent},
    { path: 'inventory', component: RecepcionMercanciaComponent},
    { path: 'inventory/recepcionMercancia', component: RecepcionMercanciaComponent},
    { path: 'planning/list', component: PlanningListComponent },
    { path: 'production/newPO', component: ProductionOrderComponent },
    { path: 'shopping/newShopping', component: NewShoppingComponent},
    { path: 'shopping/pedidos', component: PurchaseOrderComponent},
    { path: 'config/acciones', component: AccionesComponent },
    { path: 'config/users', component: UsuariosComponent },
    { path: 'config/roles', component: RolesComponent },
    { path: 'config/catalogo', component: CatalogsComponent },
    { path: 'config/catalogo/list/:id', component: CatalogsListComponent },
    { path: 'config/material', component: MaterialComponent },
    { path: 'config/material/list/:id', component: MaterialArticlesComponent },
    { path: 'config/provaiders', component: ProveedoresComponent },
    { path: 'config/providers/products/:id', component: ProviderProductsComponent },
    { path: 'config/products', component: InternalProductsComponent },
    { path: 'config/products/edit', component: ProductsEditComponent },
    { path: 'config/products/materials/:id', component: InternalProductsMaterialsComponent },
    { path: 'planning/calculation', component: ListadoVentasComponent },
    { path: 'sales/listPO', component: OrderBuyComponent },
    { path: 'inventory/warehouse', component: WarehouseComponent },
    { path: 'inventory/warehouse/products', component: WarehouseProductsComponent },
    { path: 'planning/reception', component: RecepcionComponent },
    { path: 'rh/nominas', component: NominasComponent },
    { path: 'inventory/distribution', component: DistributionComponent },
    { path: 'providers/providers', component: SuppliersProfileComponent },
    { path: 'providers/profile', component: ProfileComponent },
    { path: 'shopping/listShopping', component: OrderBuyComponent , children: [
    { path: 'providers/list', component: ListadoComponent }]},
    { path: '', component: HomeComponent },
    { path: '**', component: PNotFoundComponent }
  ]}
 
  ];

  

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash : true });
