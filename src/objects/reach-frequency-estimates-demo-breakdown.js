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
 * ReachFrequencyEstimatesDemoBreakdown
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyEstimatesDemoBreakdown extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      female: 'female',
      male: 'male',
      id: 'id'
    });
  }

  get (fields, params): ReachFrequencyEstimatesDemoBreakdown {
    return this.read(
      fields,
      params
    );
  }
}
