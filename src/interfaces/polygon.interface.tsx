export interface IPolygon {
  id: any;
  data: any; // any additional data linked to the polygon
  paths: any[];
  options: {
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    fillColor?: string;
    fillOpacity?: number;
    editable?: boolean;
    tooltip?: Function;
    isEditable?: Function;
    tooltipMode?: "click" | "hover";
  };
  onClick?: Function;
}
