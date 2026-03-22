"use client";

import Template1 from "@/components/wedding-templates/Template1";
import Template2 from "@/components/wedding-templates/Template2";
import Template3 from "@/components/wedding-templates/Template3";
import Template4 from "@/components/wedding-templates/Template4";
import Template5 from "@/components/wedding-templates/Template5";
import Template6 from "@/components/wedding-templates/Template6";
import Template7 from "@/components/wedding-templates/Template7";
import api from "@/lib/axios";
import { Collapse, message, Spin, Typography } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import Template10 from "@/components/wedding-templates/Template10_old";
import Template8 from "@/components/wedding-templates/Template8";
import Template9 from "@/components/wedding-templates/Template9";

const { Title, Text } = Typography;
const { Panel } = Collapse;

export default function TemplateEditor() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [template, setTemplate] = useState<any>(null);
  const [weddingData, setWeddingData] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [showDrawer, setShowDrawer] = useState(true);

  const fetchTemplate = useCallback(async () => {
    try {
      const res = await api.get(`/templates/${params.id}`);
      setTemplate(res.data);
      setWeddingData(res.data.defaultData);
    } catch (error) {
      message.error("Lỗi tải template");
      router.push("/admin/quan-ly-thiep");
    } finally {
      setLoading(false);
    }
  }, [params.id, router]);

  useEffect(() => {
    fetchTemplate();
  }, [fetchTemplate]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.put(`/templates/${params.id}`, {
        defaultData: weddingData,
      });
      message.success("Đã lưu thay đổi!");
    } catch (error) {
      message.error("Lỗi khi lưu");
    } finally {
      setSaving(false);
    }
  };

  const handleDataChange = (path: string, value: any) => {
    const keys = path.split(".");
    setWeddingData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleUpload = async (options: any, fieldPath: string) => {
    const { file, onSuccess, onError } = options;
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Update data with returned URL
      handleDataChange(fieldPath, res.data.url);
      onSuccess?.(res.data);
      message.success("Upload ảnh thành công");
    } catch (err) {
      onError?.(err);
      message.error("Tải ảnh thất bại");
      onError(err);
    }
  };

  const handleGalleryUpload = async (options: any) => {
    const { file, onSuccess, onError } = options;
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const newUrl = res.data.url;
      const currentGallery = weddingData.galleryImages || [];
      handleDataChange("galleryImages", [...currentGallery, newUrl]);

      message.success("Tải ảnh album thành công");
      onSuccess(res.data);
    } catch (error) {
      console.error(error);
      message.error("Tải ảnh album thất bại");
      onError(error);
    }
  };

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin size="large" />
      </div>
    );

  /* New handler for Template Save button */
  const handleTemplateSave = async (newData: any) => {
    setWeddingData(newData);
    try {
      await api.put(`/templates/${params.id}`, { defaultData: newData });
      message.success("Đồng bộ thành công!");
    } catch (error) {
      message.error("Lỗi khi đồng bộ");
      throw error;
    }
  };

  const renderTemplate = () => {
    // Determine template based on code or ID logic (Assuming code map or logic)
    // Here we use a simple mapping, assuming template codes are template1, template2 etc.
    const code = template?.code?.toLowerCase() || "";

    // Wrapper to isolate template styles if needed, though they use Tailwind
    const props = { weddingData, onSave: handleTemplateSave };

    if (code.includes("template1")) return <Template1 {...props} />;
    if (code.includes("template2")) return <Template2 {...props} />;
    if (code.includes("template3")) return <Template3 {...props} />;
    if (code.includes("template4")) return <Template4 {...props} />;
    if (code.includes("template5")) return <Template5 {...props} />;
    if (code.includes("template6")) return <Template6 {...props} />;
    if (code.includes("template7")) return <Template7 {...props} />;
    if (code.includes("template8")) return <Template8 {...props} />;
    if (code.includes("template9")) return <Template9 {...props} />;
    if (code.includes("template10")) return <Template10 {...props} />;

    return <Template1 {...props} />; // Default
  };

  return (
    <div className="h-screen w-full bg-gray-100 overflow-hidden">
      {/* Template Container - Full screen preview with inline editing */}
      <div className="h-full w-full overflow-y-auto bg-white shadow-2xl">
        {renderTemplate()}
      </div>
    </div>
  );
}
