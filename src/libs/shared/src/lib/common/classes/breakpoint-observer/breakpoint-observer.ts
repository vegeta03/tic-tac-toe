import { inject } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { Observable, from, of } from 'rxjs';
import { filter, mergeMap, map, switchMap } from 'rxjs/operators';

export class BreakpointObserverUtil {
  private _displayNamesMap = new Map<string, string>([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  private _currentDisplayName$: Observable<string>;
  private _breakpointObserver$ = inject(BreakpointObserver);

  get currentDisplayName$() {
    return this._currentDisplayName$;
  }

  constructor() {
    this._currentDisplayName$ = this._breakpointObserver$
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        mergeMap((breakpointState: BreakpointState) =>
          of(breakpointState).pipe(
            map((bState: BreakpointState) => Object.keys(bState.breakpoints)),
            switchMap((keys) => from(keys)),
            filter((key) => breakpointState.breakpoints[key]),
            map((key) => this._displayNamesMap.get(key) ?? 'Unknown')
          )
        )
      );
  }
}
