import { ClusterConfig } from "../models/Cluster.model";
import "./Cluster.scss";

const Cluster: React.FC<ClusterConfig> = (clusterConfig:ClusterConfig) => {
    return (
        <>
            <div className={`cluster d-flex justify-content-center align-items-center cursor-pointer 
                ${clusterConfig.opaque ? 'opaque' : ''} 
                ${clusterConfig.active ? 'active' : ''}`}
                onClick={(event)=>{event.stopPropagation(); clusterConfig.select(clusterConfig)}}
                style={{ width: `${clusterConfig.size}rem`, height: `${clusterConfig.size}rem` }}
            >
                <span className="caption text-center p-1">
                    {clusterConfig.name}
                </span>
            </div>
        </>
    )
}

export default Cluster;