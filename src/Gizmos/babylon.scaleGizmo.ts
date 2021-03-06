module BABYLON {
    /**
     * Gizmo that enables scaling a mesh along 3 axis
     */
    export class ScaleGizmo extends Gizmo {
        private _xDrag:AxisScaleGizmo;
        private _yDrag:AxisScaleGizmo;
        private _zDrag:AxisScaleGizmo;

        public set attachedMesh(mesh:Nullable<AbstractMesh>){
            this._xDrag.attachedMesh = mesh;
            this._yDrag.attachedMesh = mesh;
            this._zDrag.attachedMesh = mesh;
        }
        /**
         * Creates a ScaleGizmo
         * @param gizmoLayer The utility layer the gizmo will be added to
         */
        constructor(gizmoLayer:UtilityLayerRenderer){
            super(gizmoLayer);
            this._xDrag = new AxisScaleGizmo(gizmoLayer, new Vector3(1,0,0), BABYLON.Color3.Green().scale(0.5));
            this._yDrag = new AxisScaleGizmo(gizmoLayer, new Vector3(0,1,0), BABYLON.Color3.Red().scale(0.5));
            this._zDrag = new AxisScaleGizmo(gizmoLayer, new Vector3(0,0,1), BABYLON.Color3.Blue().scale(0.5));
        }

        protected _onInteractionsEnabledChanged(value:boolean){
            this._xDrag.interactionsEnabled = value
            this._yDrag.interactionsEnabled = value
            this._zDrag.interactionsEnabled = value
        }

        public set updateGizmoRotationToMatchAttachedMesh(value:boolean){
            if(this._xDrag){
                this._xDrag.updateGizmoRotationToMatchAttachedMesh = value;
                this._yDrag.updateGizmoRotationToMatchAttachedMesh = value;
                this._zDrag.updateGizmoRotationToMatchAttachedMesh = value;
            }
        }
        public get updateGizmoRotationToMatchAttachedMesh(){
            return this._xDrag.updateGizmoRotationToMatchAttachedMesh;
        }

        /**
         * Disposes of the gizmo
         */
        public dispose(){
            this._xDrag.dispose();
            this._yDrag.dispose();
            this._zDrag.dispose();
        }
    }
}