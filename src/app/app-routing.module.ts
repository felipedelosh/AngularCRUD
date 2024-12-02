import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                { path: 'notfound', component: NotfoundComponent },
                {
                    path: 'inventario',
                    loadChildren: () =>
                        import(
                            './views/inventory/inventory.module'
                        ).then((m) => m.InventoryModule),
                },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
