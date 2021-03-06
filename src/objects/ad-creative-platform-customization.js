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
 * AdCreativePlatformCustomization
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativePlatformCustomization extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      instagram: 'instagram',
      id: 'id'
    });
  }

  get (fields, params): AdCreativePlatformCustomization {
    return this.read(
      fields,
      params
    );
  }
}
