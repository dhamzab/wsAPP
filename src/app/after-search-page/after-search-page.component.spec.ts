import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSearchPageComponent } from './after-search-page.component';

describe('AfterSearchPageComponent', () => {
  let component: AfterSearchPageComponent;
  let fixture: ComponentFixture<AfterSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
