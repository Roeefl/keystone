
import React, { Fragment } from 'react';

export default ({ data, field, Link }) => {
  if (!data) {
    return null;
  }
  const refList = field.adminMeta.getListByKey(field.config.ref);
  return (
    <Fragment>
      {(Array.isArray(data) ? data : [data])
        .filter(item => item)
        .map((item, index) => (
          <Fragment key={item.id}>
            {!!index ? ', ' : ''}
            <Link path={refList.path} item={item}>
              {item._label_}
            </Link>
          </Fragment>
        ))}
    </Fragment>
  );
};
