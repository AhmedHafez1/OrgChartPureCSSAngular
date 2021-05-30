import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {
  transform(array: any[], id: string = 'uid', parentId: string = 'pid'): any[] {
    const map = array.reduce(
      (acc, node) => ((node.items = []), (acc[node[id]] = node), acc),
      {}
    );

    return Object.values(map)
      .map(
        node => (node[parentId] && map[node[parentId]].items.push(node), node)
      )
      .filter(node => node[parentId] === null);
  }
}
