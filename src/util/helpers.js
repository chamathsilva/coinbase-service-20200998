import logger from './logger';
import InvalidRequestException from '../exceptions/InvalidRequestException';


export function extractPaginationParams(query) {
  const paginationParams = {};
  const page = Number(query.page);

  const limit = Number(query.page_size);
  const totalCount = query.total_count;

  if (Number.isInteger(page) && page > 0) {
    paginationParams.page = page;
  } else if (query.page === null || typeof query.page === 'undefined') {
    logger.info(`Pagination parameter 'page' not found or invalid, setting default. page: ${page}`);
    paginationParams.page = 1;
  } else {
    throw new InvalidRequestException("'page' should be an integer");
  }

  if (Number.isInteger(limit) && limit > 0) {
    paginationParams.pageSize = limit;
  } else if (query.page_size === null || typeof query.page_size === 'undefined') {
    logger.info(`Pagination parameter 'limit' not found or invalid, setting default. limit: ${limit}`);
    paginationParams.pageSize = 10;
  } else {
    throw new InvalidRequestException("'page_size' should be an integer");
  }


  if (totalCount === 'true') {
    paginationParams.isTotalRequired = true;
  } else if (totalCount === null || typeof totalCount === 'undefined') {
    paginationParams.isTotalRequired = false;
  } else {
    throw new InvalidRequestException("'total_count' only allows value 'true'");
  }

  logger.debug(`Extracted paginationParams: ${JSON.stringify(paginationParams)}`);
  return paginationParams;
}

export function computeOffset(page, pageSize) {
  return (page - 1) * pageSize;
}
