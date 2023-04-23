import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'fdp-platform-textarea-counter-template-example',
    templateUrl: './platform-textarea-counter-template-example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PlatformTextareaCounterTemplateExampleComponent implements OnInit {
    private textareaValidator: ValidatorFn[];
    tValue =
        '';

    constructor() {
        this.textareaValidator = [Validators.required, Validators.maxLength(10)];
    }

    ngOnInit(): void {}
}
