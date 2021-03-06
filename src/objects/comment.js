/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Profile from './profile';

/**
 * Comment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Comment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      admin_creator: 'admin_creator',
      application: 'application',
      attachment: 'attachment',
      can_comment: 'can_comment',
      can_hide: 'can_hide',
      can_like: 'can_like',
      can_remove: 'can_remove',
      can_reply_privately: 'can_reply_privately',
      comment_count: 'comment_count',
      created_time: 'created_time',
      from: 'from',
      id: 'id',
      is_hidden: 'is_hidden',
      is_private: 'is_private',
      like_count: 'like_count',
      live_broadcast_timestamp: 'live_broadcast_timestamp',
      message: 'message',
      message_tags: 'message_tags',
      object: 'object',
      parent: 'parent',
      permalink_url: 'permalink_url',
      private_reply_conversation: 'private_reply_conversation',
      user_likes: 'user_likes'
    });
  }

  static get CommentPrivacyValue (): Object {
    return Object.freeze({
      default_privacy: 'DEFAULT_PRIVACY',
      owner_or_commenter: 'OWNER_OR_COMMENTER',
      friends_only: 'FRIENDS_ONLY',
      friends_and_post_owner: 'FRIENDS_AND_POST_OWNER',
      side_conversation: 'SIDE_CONVERSATION',
      side_conversation_and_post_owner: 'SIDE_CONVERSATION_AND_POST_OWNER',
      graphql_multiple_value_hack_do_not_use: 'GRAPHQL_MULTIPLE_VALUE_HACK_DO_NOT_USE'
    });
  }
  static get Filter (): Object {
    return Object.freeze({
      stream: 'stream',
      toplevel: 'toplevel'
    });
  }
  static get LiveFilter (): Object {
    return Object.freeze({
      filter_low_quality: 'filter_low_quality',
      no_filter: 'no_filter'
    });
  }
  static get Order (): Object {
    return Object.freeze({
      chronological: 'chronological',
      reverse_chronological: 'reverse_chronological'
    });
  }

  getComments (fields, params, fetchFirstPage = true): Comment {
    return this.getEdge(
      Comment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  deleteLikes (params): AbstractObject {
    return super.deleteEdge(
      '/likes',
      params
    );
  }

  getLikes (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  createLike (fields, params): Comment {
    return this.createEdge(
      '/likes',
      fields,
      params,
      Comment
    );
  }

  createPrivateReply (fields, params): AbstractObject {
    return this.createEdge(
      '/private_replies',
      fields,
      params

    );
  }

  getReactions (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/reactions'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): Comment {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Comment {
    return super.update(
      params
    );
  }
}
