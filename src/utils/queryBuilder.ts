function queryBuilder(query: any) {
  const { sort, limit, page } = query as { sort: Record<string, string>; limit: string; page: string };
  const params: Record<string, Record<string, number> | number> = {};

  if (sort) {
    const parsedSort = Object.keys(sort).reduce((acc, key) => {
      acc[key] = parseInt(sort[key]);
      return acc;
    }, {} as Record<string, number>);
    params['sort'] = parsedSort;
  }

  if (limit) {
    params['limit'] = parseInt(limit);
  }

  if (page) {
    params['page'] = parseInt(page);
  }

  return params;
}

export default queryBuilder;
