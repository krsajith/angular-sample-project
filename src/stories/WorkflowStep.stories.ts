// YourComponent.stories.ts

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { WorkflowStepComponent } from 'src/app/workflow-step/workflow-step.component';



//👇 This default export determines where your story goes in the story list
export default {
  title: 'WorkflowStepComponent',
  component: WorkflowStepComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule, ReactiveFormsModule,FormsModule],
providers: [

      ]
    }),

  ]
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<WorkflowStepComponent> = (args) => ({
  props: args,
  template: `<form #f="ngForm">
  <app-workflow-step ngModel name="userInput"> </app-workflow-step>
  <p class="mt-3" >Form value: {{ f.value | json }}</p>
                 </form> 
  `,
});

export const YourStory = Template.bind({});
YourStory.args = {
  /* 👇 The args you need here will depend on your component */
};