import { useState, useEffect } from "react";
import { CardLayout } from "../common/Card";
import { Trash, Pencil, CirclePlus } from "tabler-icons-react";
import { Image, Card, Grid, Modal, ActionIcon } from '@mantine/core';
import { useForm } from '@mantine/form';
import { TestimonialModal } from "../../../partials/TestimonialModalContent";
import { UploadImage } from "../../../../API/Features/UploadImage";
import { GetTestimonials } from "../../../../API/Testimonials/GetTestimonials";
import { DeleteTestimonial } from "../../../../API/Testimonials/DeleteTestimonials";
import { DeleteModal } from "../../../partials/DeleteModalContent";
import { AddTestimonials } from "../../../../API/Testimonials/AddTestimonials";

export const Testimonials = () => {
    const [openTestimonialModal, setOpenTestimonialModal] = useState(false);
    const [openDeleteTestimonialModal, setDeleteTestimonialModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const loadTestimonials = async () => {
        const res = await GetTestimonials();
        setTestimonials(res.data);
    }

    const form = useForm({
        initialValues: {
            title: '',
            designation: '',
            content: '',
            img: ''
        },
    });

    const SetImage = (files: any) => {
        const selectedFile = files[0];
        form.setFieldValue('img', selectedFile);
    }

    const SaveTestimonial = async () => {
        if (form.values.img === "" || form.values.img === null) {
            return;
        }
        const formData = new FormData();
        formData.append('file', form.values.img)
        const res = await UploadImage(formData);
        console.log(res);

        const imgfile = res.data.filename;

        const respData = await AddTestimonials({
            img: imgfile,
            title: form.values.title,
            designation: form.values.designation,
            description: form.values.content
        });
        console.log(respData);
    }

    const editTestimonial = (testimonial: any) => {
        form.setFieldValue('title', testimonial.title);
        form.setFieldValue('designation', testimonial.description);
        form.setFieldValue('content', testimonial.content);
        //form.setFieldValue ('img', testimonial.img);

        setOpenTestimonialModal(true);
    }

    const showTestimonialModal = () => {
        form.reset();
        setOpenTestimonialModal(true);
    }

    const selectTestimonialToDelete = (id: any) => {
        setSelectedId(id)
        setDeleteTestimonialModal(true);
    }

    const deleteTestimonial = () => {
        const id = selectedId;
        const res = DeleteTestimonial(id);
        console.log(res);
    }


    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        loadTestimonials();
    }, [])

    return <Grid className="flex justify-between">
        {
            testimonials.map((testimonial: any, index) => <Grid.Col span={6} key={index}>
                <Card padding="lg" withBorder className="w-full h-full">
                    <Grid>
                        <Grid.Col span={4}>
                            <Image src={testimonial.img} className="flex object-fill" />
                        </Grid.Col>
                        <Grid.Col span={8}>
                            <div>
                                <div className="p-1" >
                                    <div className="font-semibold text-sm">{testimonial.title}</div>
                                    <div className="text-xs">{testimonial.description}</div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <ActionIcon variant="transparent" onClick={(event) => selectTestimonialToDelete(testimonial.id)}>
                                    <Trash />
                                </ActionIcon>
                                <ActionIcon aria-label="Edit" variant="transparent" onClick={(event) => editTestimonial(testimonial)}>
                                    <Pencil />
                                </ActionIcon>
                            </div>
                        </Grid.Col>
                    </Grid>
                </Card>
            </Grid.Col>
            )
        }
        <Grid.Col span={6} className="h-24">
            <Card padding="lg" className="w-full h-full flex items-center border-dashed border-2 justify-center pointer" onClick={() => showTestimonialModal()}>
                <div className="flex font-semibold text-sm"><span>{<CirclePlus />}</span>Add Testimonial</div>
            </Card>
        </Grid.Col>

        <Modal opened={openTestimonialModal} onClose={() => setOpenTestimonialModal(false)} title="Testimonial">
            <TestimonialModal setOpenTestimonialModal={setOpenTestimonialModal} form={form} SetImage={SetImage} />
        </Modal>

        <Modal opened={openDeleteTestimonialModal} onClose={() => setDeleteTestimonialModal(false)} title="Confirm Delete">
            <DeleteModal setOpenModal={setDeleteTestimonialModal} deleteItem={deleteTestimonial} />
        </Modal>
    </Grid>
}