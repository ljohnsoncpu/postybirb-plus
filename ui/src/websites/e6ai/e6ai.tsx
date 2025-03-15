import { Form, Input } from 'antd';
import _ from 'lodash';
import { e6aiFileOptions, FileSubmission, SubmissionPart, SubmissionRating } from 'postybirb-commons';
import React from 'react';
import { SubmissionSectionProps } from '../../views/submissions/submission-forms/interfaces/submission-section.interface';
import GenericFileSubmissionSection from '../generic/GenericFileSubmissionSection';
import { LoginDialogProps } from '../interfaces/website.interface';
import { WebsiteImpl } from '../website.base';
import E6aiLogin from "./E6aiLogin";
import { e621TagSearchProvider } from './providers';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class e6ai extends WebsiteImpl {
  internalName: string = 'e6ai';
  name: string = 'e6ai';
  supportsAdditionalFiles: boolean = false;
  supportsTags: boolean = true;
  loginUrl: string = '';

  LoginDialog = (props: LoginDialogProps) => <E6aiLogin {...props} />;

  FileSubmissionForm = (props: SubmissionSectionProps<FileSubmission, e6aiFileOptions>) => (
    <E6aiFileSubmissionForm
      hideThumbnailOptions={true}
      tagOptions={{
        show: true,
        searchProvider: e621TagSearchProvider
      }}
      ratingOptions={{
        show: true,
        ratings: [
          {
            value: SubmissionRating.GENERAL,
            name: 'Safe'
          },
          {
            value: SubmissionRating.MATURE,
            name: 'Questionable'
          },
          {
            value: SubmissionRating.ADULT,
            name: 'Explicit'
          }
        ]
      }}
      key={props.part.accountId}
      {...props}
    />
  );
}

export class E6aiFileSubmissionForm extends GenericFileSubmissionSection<e6aiFileOptions> {
  handleSourceChange(index: number, { target }) {
    const part: SubmissionPart<e6aiFileOptions> = _.cloneDeep(this.props.part);
    part.data.sources[index] = target.value;
    this.props.onUpdate(part);
  }

  getSourceSection() {
    const sources: JSX.Element[] = [];
    const { data } = this.props.part;
    for (let i = 0; i < 10; i++) {
      sources.push(
        <Form.Item label={`Source ${i + 1}`}>
          <Input value={data.sources[i]} onChange={this.handleSourceChange.bind(this, i)} />
        </Form.Item>,
      );
    }
    return sources;
  }

  renderRightForm(data: e6aiFileOptions) {
    const elements = super.renderRightForm(data);
    elements.push(
      <Form.Item label="Parent Id">
        <Input onChange={this.handleValueChange.bind(this, 'parentId')} />
      </Form.Item>
    );
    elements.push(...this.getSourceSection());
    return elements;
  }
}
