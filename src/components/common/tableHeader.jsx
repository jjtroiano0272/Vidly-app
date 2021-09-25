import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons';
// Use as <FontAwesomeIcon icon={faSort}

// cols: array
// this.props destruct sortColumn, onSort
// const { sortColumn, onSort } = this.props;

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;

    if (
      column.path !== sortColumn.path ||
      column.key === 'like' ||
      column.key === 'delete'
    )
      return null;
    if (sortColumn.order === 'asc') return <FontAwesomeIcon icon={faSortUp} />;

    return <FontAwesomeIcon icon={faSortDown} />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              className={column.key === 'delete' ? 'col-4' : 'col-4 clickable'}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
