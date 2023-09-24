import Image from "next/image";
import React from "react";

import Button from "@/components/common/button";
import Label from "@/components/common/label";
import Layout from "@/components/layout";

const Contact = () => {
  return (
    <Layout>
      ini halaman contact
      <Button className={"bg-slate-400 px-4 py-2 rounded-lg"}>
        ini button
      </Button>
      <Label htmlFor="email">ini label</Label>
      <div className="bg-white w-96 ">
        <Image src="/public/vercel.svg" alt="" />
      </div>
    </Layout>
  );
};

export default Contact;
