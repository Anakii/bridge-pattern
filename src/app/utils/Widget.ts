import { InjectionToken } from "@angular/core";

export interface IWidget {
    loadData: () => void;
}
export const WIDGET: InjectionToken<IWidget> = new InjectionToken<IWidget>('widget')
