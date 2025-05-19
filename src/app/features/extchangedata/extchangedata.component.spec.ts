import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtchangedataComponent } from './extchangedata.component';

describe('ExtchangedataComponent', () => {
  let component: ExtchangedataComponent;
  let fixture: ComponentFixture<ExtchangedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtchangedataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtchangedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
