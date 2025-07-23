import react , {useState, useEffect, useCallback} from 'react'
import { getCldImageUrl , getCldVideoUrl} from 'next-cloudinary'
import { Download , Clock ,FileDown, FileUp} from 'lucide-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {filesize} from 'filesize'
import { Video } from '@prisma/client'

interface VideoCardProps {
    video: Video;
    onDownload: (url: string, title: string) => void;
}

const VideoCard = ({video, onDownload}: VideoCardProps) => {
    const[isHovered, setIsHovered] = useState(false);
    const[previewerror, setPreviewerror] = useState(false);

    const getThumbnailUrl = useCallback((publicd:string)=>{
        return getCldImageUrl(publicId, {
            src:publicId,
            width: 300,
            height: 200,
            crop: "fill",
            gravity: "auto",
            quality: 80,
            fetchFormat: "auto",
            fetchFormat: "auto",
          })
    },[video.thumbnail])
    })  
    const formatsize= useCallback(()=>{
        return filesize(video.size)
    },[])
    const formDuration = useCallback((seconds:number)=>{
        const minutes=Math.floor(seconds/60)
        const secondsLeft=seconds%60
        return `${minutes}:${secondsLeft<10?'0':''}${secondsLeft}`
        },[])

    const compressionPercentage = Math.round(
        (1-Video.compressedSize/Video.size)*100
    )

}