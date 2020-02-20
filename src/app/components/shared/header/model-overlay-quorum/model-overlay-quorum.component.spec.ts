import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelOverlayPowerChainComponent } from './model-overlay-PowerChain.component';

describe('ModelOverlayPowerChainComponent', () => {
  let component: ModelOverlayPowerChainComponent;
  let fixture: ComponentFixture<ModelOverlayPowerChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelOverlayPowerChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelOverlayPowerChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
