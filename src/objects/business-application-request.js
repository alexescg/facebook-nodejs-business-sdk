/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * BusinessApplicationRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessApplicationRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      application: 'application',
      id: 'id'
    });
  }

  get (fields, params): BusinessApplicationRequest {
    return this.read(
      fields,
      params
    );
  }
}
