import {renderHook} from '@testing-library/react';
import useMap from './useMap';
import {Map} from 'leaflet';
import {cities} from '../const';
import {MutableRefObject} from 'react';

const mapContainer: MutableRefObject<HTMLElement | null> = {current: document.createElement('div')};

describe('Hook: useMap', () => {
  it('should return object type of Map', () => {
    const {result} = renderHook(() => useMap(mapContainer, cities[0]));
    const map = result.current;
    expect(map).toBeInstanceOf(Map);
  });
});
