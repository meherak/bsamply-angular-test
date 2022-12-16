import { Order, SearchParams } from '../interfaces';

export const paramsFactory = (
  searchParams: SearchParams
): { [param: string]: string | number } => {
  const query = searchParams?.search;
  const criticsPick = searchParams?.criticsPick && 'Y';
  const offset = searchParams?.offset && searchParams?.offset * 20;
  const order =
    searchParams?.order === 'publication date'
      ? Order.pDate
      : searchParams?.order === 'opening date'
      ? Order.oDate
      : null;

  const params: { [param: string]: string | number } = {};
  if (!!order) params['order'] = order;
  if (!!query) params['query'] = query;
  if (!!offset) params['offset'] = offset;
  if (!!criticsPick) params['critics-pick'] = criticsPick;

  return params;
};
