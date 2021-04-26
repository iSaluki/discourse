# frozen_string_literal: true

class MoveApprovedQueuedPostsTopicAndPostData < ActiveRecord::Migration[6.1]
  def up
    DB.query_single <<~SQL
      UPDATE reviewables r
      SET topic_id = (payload->>'created_topic_id')::int, target_id = (payload->>'created_post_id')::int
      WHERE r.type = 'ReviewableQueuedPost' AND r.status = #{Reviewable.statuses[:approved]}
      AND (r.payload->>'created_topic_id') IS NOT NULL AND (r.payload->>'created_post_id') IS NOT NULL
    SQL
  end

  def down
    DB.query_single <<~SQL
      UPDATE reviewables r
      SET topic_id = NULL, target_id = NULL
      WHERE r.type = 'ReviewableQueuedPost' AND r.status = #{Reviewable.statuses[:approved]}
      AND (r.payload->>'created_topic_id') IS NOT NULL AND (r.payload->>'created_post_id') IS NOT NULL
    SQL
  end
end
