import { gql } from '@apollo/client';
import { REPO_DATA, REPO_REVIEW } from './fragments';

export const GET_REPOS = gql`
  query getRepos(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $filter: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $filter
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...repoData
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }

  ${REPO_DATA}
`;

export const GET_REPO = gql`
  query getRepo($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...repoData
      reviews(first: $first, after: $after) {
        ...repoReview
      }
    }
  }

  ${REPO_DATA}
  ${REPO_REVIEW}
`;

export const IS_AUTH = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        ...repoReview
      }
    }
  }

  ${REPO_REVIEW}
`;

export const GET_ME = gql`
{
  me {
    id
    username
  }
}`;

export const ME = gql`
query Me(
  $includeReviews: Boolean = false
  $reviewsFirst: Int
  $reviewsAfter: String
) {
  me {
    id
    username
    createdAt
    reviews(first: $reviewsFirst, after: $reviewsAfter) @include(if: $includeReviews) {
      edges {
        node {
          id
          text
          rating
          createdAt
          repository {
            id
            fullName
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
`;
