import React from 'react';
import renderer from 'react-test-renderer';
import Paginator from '../../../src/components/grid/Paginator';
import PageItem from '../../../src/components/grid/PageItem';
import { describe, beforeEach, expect, test, vi } from 'vitest';
import { IPagination } from '../../../src/types';

vi.mock('../../../src/components/grid/PageItem');

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
};

const paginationMock = {
  firstPage: 1,
  lastPage: 1,
  nextPage: 1,
  prevPage: 1,
  nextPages: [],
  prevPages: [],
  page: 1,
};

vi.mock('react-router-dom');

const page = (page: number) => {
  vi.fn();
};

const onMounted = async (mock: IPagination) => {
  let component;

  component = renderer.create(
    <Paginator
      page={page}
      pagination={mock}
    />
  );

  return toJson(component);
};

describe('Paginator.tsx', () => {
  let tree;

  beforeEach(async () => {
    vi.clearAllMocks();

    tree = await onMounted(paginationMock);
  });

  test('should render correctly the Paginator component and take a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should have 5 PageItem child element must be called', async () => {
    expect(PageItem).toHaveBeenCalled();
    
    expect(PageItem).toHaveBeenCalledTimes(5);
  });

  test('shoud have 9 PageItem when we are on first page', async () => {
    vi.clearAllMocks();

    tree = await onMounted({
      firstPage: 1,
      lastPage: 10,
      nextPage: 2,
      prevPage: 0,
      nextPages: [2, 3, 4, 5],
      prevPages: [],
      page: 1,
    });

    expect(PageItem).toHaveBeenCalled();

    expect(PageItem).toHaveBeenCalledTimes(9);

    const pageItemProps = [
      {
        page,
        item: 1,
        itemLabel: '<<',
      },
      {
        page,
        item: 0,
        itemLabel: '<',
      },
      {
        item: 1,
        itemLabel: 1,
        current: true,
      },
      {
        page,
        item: 2,
        itemLabel: 2,
      },
      {
        page,
        item: 3,
        itemLabel: 3,
      },
      {
        page,
        item: 4,
        itemLabel: 4,
      },
      {
        page,
        item: 5,
        itemLabel: 5,
      },
      {
        page,
        item: 2,
        itemLabel: '>',
      },
      {
        page,
        item: 10,
        itemLabel: '>>',
      },
    ];

    pageItemProps.forEach((props, index) => {
      expect(PageItem).toHaveBeenNthCalledWith(index + 1, props, {});
    });
  });

  test('shoud have 9 PageItem, when we are on last page', async () => {
    vi.clearAllMocks();

    tree = await onMounted({
      firstPage: 1,
      lastPage: 10,
      nextPage: 0,
      prevPage: 9,
      nextPages: [],
      prevPages: [6, 7, 8, 9],
      page: 10,
    });

    expect(PageItem).toHaveBeenCalled();

    expect(PageItem).toHaveBeenCalledTimes(9);

    const pageItemProps = [
      {
        page,
        item: 1,
        itemLabel: '<<',
      },
      {
        page,
        item: 9,
        itemLabel: '<',
      },
      {
        page,
        item: 6,
        itemLabel: 6,
      },
      {
        page,
        item: 7,
        itemLabel: 7,
      },
      {
        page,
        item: 8,
        itemLabel: 8,
      },
      {
        page,
        item: 9,
        itemLabel: 9,
      },
      {
        item: 10,
        itemLabel: 10,
        current: true,
      },
      {
        page,
        item: 0,
        itemLabel: '>',
      },
      {
        page,
        item: 10,
        itemLabel: '>>',
      },
    ];

    pageItemProps.forEach((props, index) => {
      expect(PageItem).toHaveBeenNthCalledWith(index + 1, props, {});
    });
  });

  test('shoud have 9 PageItem, when we are on middle page', async () => {
    vi.clearAllMocks();

    tree = await onMounted({
      firstPage: 1,
      lastPage: 10,
      nextPage: 5,
      prevPage: 4,
      nextPages: [6, 7],
      prevPages: [3, 4],
      page: 5,
    });

    expect(PageItem).toHaveBeenCalled();

    expect(PageItem).toHaveBeenCalledTimes(9);

    const pageItemProps = [
      {
        page,
        item: 1,
        itemLabel: '<<',
      },
      {
        page,
        item: 4,
        itemLabel: '<',
      },
      {
        page,
        item: 3,
        itemLabel: 3,
      },
      {
        page,
        item: 4,
        itemLabel: 4,
      },
      {
        item: 5,
        itemLabel: 5,
        current: true,
      },
      {
        page,
        item: 6,
        itemLabel: 6,
      },
      {
        page,
        item: 7,
        itemLabel: 7,
      },
      {
        page,
        item: 5,
        itemLabel: '>',
      },
      {
        page,
        item: 10,
        itemLabel: '>>',
      },
    ];

    pageItemProps.forEach((props, index) => {
      expect(PageItem).toHaveBeenNthCalledWith(index + 1, props, {});
    });
  });
});
