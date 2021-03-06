import { DataSourcePlugin } from '@grafana/data';

import { QueryEditor } from './components/QueryEditor';
import { ConfigEditor } from './configuration/ConfigEditor';
import { ElasticDatasource } from './datasource';

class ElasticAnnotationsQueryCtrl {
  static templateUrl = 'partials/annotations.editor.html';
}

export const plugin = new DataSourcePlugin(ElasticDatasource)
  .setQueryEditor(QueryEditor)
  .setConfigEditor(ConfigEditor)
  .setAnnotationQueryCtrl(ElasticAnnotationsQueryCtrl);
